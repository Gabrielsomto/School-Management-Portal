import React from "react";

// bootstrap icons
import {
  BsArrowLeftSquareFill,
  BsSearch,
  BsArrowRightSquareFill,
  BsSpeedometer2,
  BsPen,
  BsCaretDownFill,
  BsCaretUpFill,
  BsPersonFill,
  BsPersonCircle,
  BsFillPersonBadgeFill,
  BsPersonBoundingBox,
  BsPersonDash,
  BsBox,
  BsReceipt,
  BsClipboard,
  BsPersonLinesFill,
  BsPersonPlus,
} from "react-icons/bs";

// dashboard menu items

const dashMenuItems = [
  {
    name: "Students",
    amount: 373,
    exact: true,
    to: `/Students`,
    iconClassName: <BsPersonFill />,
  },
  {
    name: "Teachers",
    amount: 33,
    exact: true,
    to: `/Teachers`,
    iconClassName: <BsPersonCircle />,
  },
  {
    name: "Male Students",
    amount: 180,
    exact: true,
    to: `/MaleStudents`,
    iconClassName: <BsFillPersonBadgeFill />,
  },
  {
    name: "Female Students",
    amount: 193,
    exact: true,
    to: `/FemaleStudents`,
    iconClassName: <BsPersonBoundingBox />,
  },
  {
    name: "Register Student",

    exact: true,
    to: `/StudentManager/RegisterStudent`,
    iconClassName: <BsPersonDash />,
  },
  {
    name: "Enter Scores",

    exact: true,
    to: `/Scores/EnterScores`,
    iconClassName: <BsBox />,
  },
  {
    name: "Print Results",

    exact: true,
    to: `/ResultManager/PrintResults`,
    iconClassName: <BsReceipt />,
  },
  {
    name: "Class Members",

    exact: true,
    to: `/Classes/ManageClassMembers`,
    iconClassName: <BsClipboard />,
  },
  {
    name: "Subject Members",

    exact: true,
    to: `/SubjectManager/SelectSubjectMembers`,
    iconClassName: <BsPersonLinesFill />,
  },
  {
    name: "View Class",

    exact: true,
    to: `/ResultManager/ViewClassBroadsheet`,
    iconClassName: <BsPersonPlus />,
  },
];

// admin dahboard
const AdminDashboard = () => {
  return (
    <>
      AdminDashboard
      <div className="adash-wrap">
        {dashMenuItems.map((dashMenuItem, index) => {
          return (
            <a href={dashMenuItem.to} key={index}>
              <div className="adash  margin-bottom">
                <div className="dash-item font-size">
                  {dashMenuItem.iconClassName}
                </div>
                <div className="dash-item margin-left">{dashMenuItem.name}</div>
                <div className="dash-item">{dashMenuItem.amount}</div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default AdminDashboard;
