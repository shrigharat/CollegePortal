import React from "react";
import styled from "styled-components";
import useModal from "../../general/modal/modal.component";

import Tile from "./tile.component";
import CreateCourseworkForm from "../../../forms/create.coursework.form";

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
`;

const CourseWork = () => {
  const [onOpen, setComponent, Modal] = useModal();
  const courseworkList = [
    {
      title: "Computer networks : Assignment no 3",
      postedOn: "Posted on 10-04-2021",
      info: { title: "Due by", value: "15-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 2",
      postedOn: "Posted on 5-04-2021",
      info: { title: "Due by", value: "10-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "test",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 1",
      postedOn: "Posted on 1-04-2021",
      info: { title: "Due by", value: "05-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "experiment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 3",
      postedOn: "Posted on 10-04-2021",
      info: { title: "Due by", value: "15-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 2",
      postedOn: "Posted on 5-04-2021",
      info: { title: "Due by", value: "10-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 1",
      postedOn: "Posted on 1-04-2021",
      info: { title: "Due by", value: "05-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 3",
      postedOn: "Posted on 10-04-2021",
      info: { title: "Due by", value: "15-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 2",
      postedOn: "Posted on 5-04-2021",
      info: { title: "Due by", value: "10-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 1",
      postedOn: "Posted on 1-04-2021",
      info: { title: "Due by", value: "05-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 3",
      postedOn: "Posted on 10-04-2021",
      info: { title: "Due by", value: "15-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 2",
      postedOn: "Posted on 5-04-2021",
      info: { title: "Due by", value: "10-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
    {
      title: "Computer networks : Assignment no 1",
      postedOn: "Posted on 1-04-2021",
      info: { title: "Due by", value: "05-04-2021", type: "string" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum maxime nam totam, enim quia illum atque blanditiis modi. Explicabo, distinctio nisi.",
      category: "assignment",
      courseworkFile: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="coursework-list">
      {courseworkList.map((courseObject) => (
        <Tile
          props={courseObject}
          onClickHandler={() => {
            setComponent({
              title: "Coursework details",
              body: (
                <CreateCourseworkForm
                  isEditable={false}
                  formData={courseObject}
                />
              ),
            });
            onOpen();
          }}
        />
      ))}
      {Modal}
    </div>
  );
};

export default CourseWork;
