import React, { useEffect, useState } from "react";
import {
  IonActionSheet,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRippleEffect,
  IonRow
} from "@ionic/react";
import { pencilOutline, trashOutline } from "ionicons/icons";
import axiosInstance from "../../lib/axiosInstance";
import { TodoForm } from "./Form";

type Todo = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  deadline: Date;
};

export const TodoList: React.FC = () => {
  const [openActionSheet, setOpenActionSheet] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [openForm, setOpenForm] = useState(false); // Deklarasi variabel openForm
  const [isEditForm, setIsEditForm] = useState(false); // Deklarasi variabel isEditForm

  const fetchTodos = () => {
    axiosInstance
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch(console.error);
  };

  const deleteTodo = (id: string) => {
    axiosInstance
      .request({
        url: `/todos/${id}`,
        method: "DELETE",
      })
      .then((res) => {
        fetchTodos();
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <IonGrid className="ion-padding">
      <IonRow>
        {todos.map((todo) => (
          <IonCol size="12" className="ion-margin-bottom" key={todo.id}>
            <IonCard
              className="ion-no-margin ion-activatable"
              onClick={() => {
                setOpenActionSheet(true);
                setSelectedId(todo.id);
              }}
            >
              <IonRippleEffect />
              <IonCardHeader>
                <IonCardTitle>{todo.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{todo.description}</IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
      <IonActionSheet
        isOpen={openActionSheet}
        header="Action"
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: trashOutline,
            data: { action: "delete" },
            handler: () => {
              deleteTodo(selectedId);
            },
          },
          {
            text: "Edit",
            icon: pencilOutline,
            data: { action: "edit" },
            handler: () => {
              setOpenForm(true);
              setIsEditForm(true);
              }
          },
          {
            text: "Cancel",
            role: "cancel",
            data: { action: "cancel" },
          },
        ]}
        onWillDismiss={() => setOpenActionSheet(false)}
      />
      <TodoForm isOpen={openForm} isEdit={isEditForm} onDidDismiss={() => setOpenForm(false)} id={selectedId} />
    </IonGrid>
  );
};
