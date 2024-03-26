import React from "react";
import Header from "./Header";
import TaskContainer from "./TaskContainer";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import ModalDelete from "./ModalDelete";
import ModalCreate from "./ModalCreate";

const Home = () => {
  const edit = useSelector((store) => store?.modal?.edit);
  const deleted = useSelector((store) => store?.modal?.delete);
  const create = useSelector((store) => store?.modal?.create);
  return (
    <div className="bg-gradient-to-r from-[#f4dbf9] to-[#dfdbfc] min-h-screen h-fit border-2 border-black">
      {edit && <Modal />}
      {deleted && <ModalDelete />}
      {create && <ModalCreate />}
      <Header />
      <div className="p-6">
        <TaskContainer />
      </div>
    </div>
  );
};

export default Home;
