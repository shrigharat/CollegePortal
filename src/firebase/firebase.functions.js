import { firestore, storageRef } from "./firebase.utils";
import { DEPARTMENTS } from "../forms/data";

export const userExists = async (id) => {
  const userRef = firestore.doc(`users/${id}`);
  const snapshot = await userRef.get();
  return snapshot.exists;
};

export const fetchFirestoreUser = async (id) => {
  const userRef = firestore.doc(`users/${id}`);
  const snapshot = await userRef.get();
  return snapshot.data();
};

export const createDepartments = () => {
  DEPARTMENTS.forEach(async (department) => {
    const docRef = firestore.collection("departments").doc();
    await docRef.set({
      departmentId: docRef.id,
      collegeId: "93SyMBEvIA1N5wDnMjVO",
      departmentName: department.name,
    });
    console.log(`Department ${department.name} created!`);
  });
};

export const fetchColleges = async () => {
  const collegesRef = firestore.collection("colleges");
  const collegeArray = [];
  const snapshot = await collegesRef.get();
  snapshot.docs.forEach((doc) => collegeArray.push(doc.data()));
  return collegeArray;
};

export const fetchDepartments = async (collegeId) => {
  const departmentsRef = firestore
    .collection("departments")
    .where("collegeId", "==", collegeId);
  const departmentsArray = [];
  const snapshot = await departmentsRef.get();
  snapshot.docs.forEach((doc) => departmentsArray.push(doc.data()));
  return departmentsArray;
};

export const createFirestoreClass = async (classInfo) => {
  const classDocRef = firestore.collection("classes").doc();
  try {
    await classDocRef.set({
      ...classInfo,
      classId: classDocRef.id,
    });
  } catch (e) {
    console.log("Error occured while creating class: ", { e });
  }
  return classDocRef.id;
};

export const createFirestoreUser = async (user) => {
  try {
    await firestore.collection("users").doc(user.id).set(user);
    return true;
  } catch (e) {
    console.log("Error occured while creating user!", { e });
    return false;
  }
};

export const fetchUserClasses = async (userId, classIdArray) => {
  let classes = { myClasses: [], otherClasses: [] };
  for (let i = 0; i < classIdArray.length; i++) {
    let classDocRef = firestore.doc(`classes/${classIdArray[i]}`);
    let snapshot = await classDocRef.get();
    let classData = snapshot.data();
    let classDepartmentRef = firestore.doc(
      `departments/${classData["departmentId"]}`
    );
    let classDepartment = await classDepartmentRef.get();
    let department = classDepartment.data();
    if (classData["classInchargeId"] === userId) {
      classes["myClasses"].push({
        ...classData,
        departmentName: department.departmentName,
      });
    } else {
      classes["otherClasses"].push({
        ...classData,
        departmentName: department.departmentName,
      });
    }
  }
  return classes;
};

export const updateUserDoc = async (id, propertyToUpdate) => {
  await firestore.doc(`users/${id}`).update(propertyToUpdate);
};

export const createFirestoreSubject = async (userId, classId, subject) => {
  const subjectDocRef = firestore
    .collection(`classes/${classId}/subjects`)
    .doc();
  try {
    await subjectDocRef.set({
      ...subject,
      subjectInstructor: userId,
      subjectId: subjectDocRef.id,
    });
  } catch (e) {
    console.log("Error while adding subject: ", e);
  }
};

export const fetchSubjectsForClass = async (classId) => {
  const subjectsArray = [];
  const subjectsRef = firestore.collection(`classes/${classId}/subjects`);
  const snapshot = await subjectsRef.get();
  snapshot.docs.forEach(async (doc) => {
    const docData = doc.data();
    const subjectInstructor = await fetchFirestoreUser(docData["subjectInstructor"]);
    subjectsArray.push({
      ...docData,
      subjectInstructor
    });
  });
  return subjectsArray;
};

export const createFirestoreResource = async (
  classId,
  subjectId,
  resourceObject
) => {
  const newResourceRef = firestore
    .collection(`classes/${classId}/subjects/${subjectId}/notes`)
    .doc();
  try {
    await newResourceRef.set({
      ...resourceObject,
      noteId: newResourceRef.id,
    });
  } catch (e) {
    console.log("Error while adding subject: ", e);
  }
};

export const createTimetable = async (classId) => {
  const timetableRef = firestore.collection(`classes/${classId}/timetable`);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0; i < days.length; i++) {
    let lectures = [];
    for (let i = 0; i < 4; i++) {
      lectures.push({
        lectureTitle: `DWM lec ${i}`,
        lectureLink: "www.youtube.com",
        subjectId: "vambP62X8aUn8xKhG1gH",
        lectureInstructor: "Sachin Chavhan",
        lectureTimeFrom: `${i + 1}:00`,
        lectureTimeTo: `${i + 2}:00`,
      });
    }
    await timetableRef.doc(days[i]).set({ lectures });
  }
};

export const fetchClassLectures = async (classId) => {
  const timetable = {};
  try {
    const timetableRef = firestore.collection(`classes/${classId}/timetable`);
    const snapshot = await timetableRef.get();
    snapshot.docs.forEach((doc) => {
      timetable[doc.id] = doc.data()["lectures"];
    });
  } catch (e) {
    console.log("Error while fetching timetable: ", e);
  }
  return timetable;
};

export const uploadFileToStorage = async (url, file) => {
  console.log("Üploading file");
  const fileRef = storageRef.child(`${url}/${file.name}`);
  try {
    const snapshot = await fileRef.put(file);
    console.log("Snapshot: ", snapshot);
    return await snapshot.ref.getDownloadURL();
  } catch (e) {
    console.log("Error while uploading file ", e);
  }
};

export const deleteFirestoreDoc = (params) => {
  if (params.collection) {
  } else {
  }
};

export const createFirestoreNotice = async (classId, noticeObj) => {
  let date = new Date();
  let noticeRef = firestore.collection(`classes/${classId}/notices`).doc();
  await noticeRef.set({
    ...noticeObj,
    postedOn: date,
    id: noticeRef.id,
  });
};

export const fetchClassNotices = async (classId) => {
  const noticesArray = [];
  const noticesRef = firestore.collection(`classes/${classId}/notices`);
  const snapshot = await noticesRef.get();
  snapshot.docs.forEach((doc) => noticesArray.push(doc.data()));
  return noticesArray;
};

export const fetchClassParticipants = async (collegeId, classId) => {
  const participants = { validParticipants: [], invalidParticipants: [] };
  const usersRef = firestore
    .collection("users")
    .where("collegeId", "==", collegeId)
    .where("userType", "==", "STUDENT");
  const snapshot = await usersRef.get();
  snapshot.docs.forEach((doc) => {
    const docData = doc.data();
    if(docData["classId"].includes(classId)) {
      if (docData["isProfileValid"]) {
        participants["validParticipants"].push(docData);
      } else {
        participants["invalidParticipants"].push(docData);
      }
    }
  });
  return participants;
};

export const fetchCollegeClasses = async (collegeId) => {
  const classes = [];
  const classesCollectionRef = firestore
    .collection("classes")
    .where("collegeId", "==", collegeId);
  const snapshot = await classesCollectionRef.get();
  snapshot.docs.forEach((doc) => classes.push(doc.data()));
  console.log("Fetched classes: ", classes);
  return classes;
};

export const deleteClassSubject = async (classId, subjectId) => {
  await firestore.doc(`classes/${classId}/subjects/${subjectId}`).delete();
};
