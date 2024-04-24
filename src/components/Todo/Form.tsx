import { IonAlert } from "@ionic/react";
import { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import { TodoList } from "./List";

type TodoFormTypes = {
  isOpen: boolean;
  isEdit?: boolean;
  data?: string;
  id?: string;
  onDidDismiss: () => void;
};

export const TodoForm: React.FC<TodoFormTypes> = (props) => {
  const createTodo = (title: string, description: string) => {
    axiosInstance.post('todos', {
      title, description
    })
    .then((resp) => {
      alert('Berhasil membuat todo!')
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const updateTodo = (title: string, description: string) => {
    axiosInstance.put(`todos/${props.id}`, {
      title, description
    })
    .then((resp) => {
      alert('Berhasil mengupdate todo!');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <IonAlert
      isOpen={props.isOpen}
      onDidDismiss={props.onDidDismiss}
      header="Todo Form"
      subHeader={props.isEdit ? "Edit Todo" : "Create New Todo"}
      inputs={[
        {
          name: "title",
          placeholder: "Title",
        },
        {
          name: "description",
          type: "textarea",
          placeholder: "Description",
        },
      ]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Save",
          role: "confirm",
          handler: (data) => {
            props.isEdit ? updateTodo(data.title, data.description) : createTodo(data.title, data.description)
          },
        },
      ]}
    />
  );
};
