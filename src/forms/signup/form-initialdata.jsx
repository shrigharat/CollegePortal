import * as yup from "yup";

export const phaseTwoFormSchema = yup.object().shape({
  userType: yup.string().required("Role is required"),
  userDob: yup.date().required("Select date of birth"),
  collegeId: yup.string().required("College is required"),
  userCollegeUid: yup.string().required("Your college UID is required"),
  departmentId: yup.string().required("Department is required"),
  userAssociatedYear: yup
    .string()
    .required("Current year you are associated with is required"),
  userAssociatedDivision: yup
    .string()
    .required("Division you are associated with is required"),
});

export const phaseTwoFormInitial = {
  userType: "",
  userDob: "",
  collegeId: "",
  userCollegeUid: "",
  departmentId: "",
  userAssociatedYear: "",
  userAssociatedDivision: "",
};

export const phaseTowFormSubmit = async (values) => {

}
