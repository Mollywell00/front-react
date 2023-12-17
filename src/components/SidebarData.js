import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Diagnosa",
    path: "/diagnosa",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Riwayat",
    path: "/riwayat",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  },
  {
    title: "Keterangan",
    path: "/keterangan",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Kelompok",
    path: "/kelompok",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
