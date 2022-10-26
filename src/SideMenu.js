import React, { useEffect, useState } from "react";
import logo from "./Svg/webscript.png";
import user from "./Svg/user.jpg";
import {
  BsArrowLeftSquareFill,
  BsSearch,
  BsArrowRightSquareFill,
  BsSpeedometer2,
  BsPen,
  BsCaretDownFill,
  BsCaretUpFill,
} from "react-icons/bs";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    name: "AdminDashboard",
    exact: true,
    to: `/`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
  },
  {
    name: "StudentManager",
    exact: true,
    to: "/StudentManager",
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      { name: "RegisterStudent", to: "/StudentManager/RegisterStudent" },
      { name: "CaptureStudent", to: "/StudentManager/CaptureStudent" },
      { name: "ViewStudent", to: "/StudentManager/ViewStudent" },
      {
        name: "ManageActiveStudents",
        to: "/StudentManager/ManageActiveStudents",
      },
      { name: "RemoveStudent", to: "/StudentManager/RemoveStudent" },
    ],
  },
  {
    name: "StaffManager",
    exact: true,
    to: `/StaffManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      { name: "RegisterStaff", to: "/StaffManager/RegisterStaff" },
      { name: "CaptureStaff", to: "/StaffManager/CaptureStaff" },
      { name: "ViewStaff", to: "/StaffManager/ViewStaff" },
      { name: "RemoveStaff", to: "/StaffManager/RemoveStaff" },
    ],
  },

  {
    name: "Parents",
    exact: true,
    to: `/Parents`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [{ name: "ViewParents", to: "/Parents/ViewParents" }],
  },
  {
    name: "Classes",
    exact: true,
    to: `/Classes`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      { name: "ManageClassMembers", to: "/Classes/ManageClassMembers" },
      { name: "AssignFormTeacher", to: "/Classes/AssignFormTeacher" },
      { name: "CreateClass", to: "/Classes/CreateClass" },
    ],
  },
  {
    name: "SubjectManager",
    exact: true,
    to: `/SubjectManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      {
        name: "AssignSubjectToClass",
        to: "/SubjectManager/AssignSubjectToClass",
      },
      {
        name: "SelectSubjectMembers",
        to: "/SubjectManager/SelectSubjectMembers",
      },
      { name: "SetSubjectOrder", to: "/SubjectManager/SetSubjectOrder" },
    ],
  },
  {
    name: "Scores",
    exact: true,
    to: `/Scores`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [{ name: "EnterScores", to: "/Scores/EnterScores" }],
  },
  {
    name: "CommentManager",
    exact: true,
    to: `/CommentManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [{ name: "MakeComments", to: "/CommentManager/MakeComments" }],
  },
  {
    name: "TraitManager",
    exact: true,
    to: `/TraitManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      {
        name: "MakeTraitAssessments",
        to: "/TraitManager/MakeTraitAssessments",
      },
      { name: "ManageSchoolTraits", to: "/TraitManager/ManageSchoolTraits" },
      { name: "SchoolTraitRating", to: "/TraitManager/SchoolTraitRating" },
    ],
  },
  {
    name: "ResultManager",
    exact: true,
    to: `/ResultManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [{ name: "ManageResults", to: "/ResultManager/ManageResults" }],
  },
  {
    name: "TimetableManager",
    exact: true,
    to: `/TimetableManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
  },
  {
    name: "SchoolSections",
    exact: true,
    to: `/SchoolSections`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      { name: "ViewSections", to: "/SchoolSections/ViewSections" },
      {
        name: "CreateSchoolSection",
        to: "/SchoolSections/CreateSchoolSection",
      },
    ],
  },
  {
    name: "InventoryManager",
    exact: true,
    to: `/InventoryManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      { name: "ManageCategories", to: "/InventoryManager/ManageCategories" },
      { name: "CreateNewItem", to: "/InventoryManager/CreateNewItem" },
      { name: "SellItem", to: "/InventoryManager/SellItem" },
      { name: "RestockItem", to: "/InventoryManager/RestockItem" },
      { name: "ViewReports", to: "/InventoryManager/ViewReports" },
    ],
  },
  {
    name: "HostelManager",
    exact: true,
    to: `/HostelManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      { name: "AssignRoomToStudent", to: "/HostelManager/AssignRoomToStudent" },
      { name: "ViewHostelMembers", to: "/HostelManager/ViewHostelMembers" },
      {
        name: "ManageHostelFurniture",
        to: "/HostelManager/ManageHostelFurniture",
      },
    ],
  },
  {
    name: "PayrollManager",
    exact: true,
    to: `/PayrollManager`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      {
        name: "ManageStaffSalaries",
        to: "/PayrollManager/ManageStaffSalaries",
      },
      {
        name: "CreateMonthlyPayroll",
        to: "/PayrollManager/CreateMonthlyPayroll",
      },
      { name: "ViewPayrollReports", to: "/PayrollManager/ViewPayrollReports" },
      {
        name: "ManagePayrollStructure",
        to: "/PayrollManager/ManagePayrollStructure",
      },
    ],
  },
  {
    name: "SchoolAdmin",
    exact: true,
    to: `/SchoolAdmin`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      {
        name: "ConfigureSchoolDetails",
        to: "/SchoolAdmin/ConfigureSchoolDetails",
      },
      {
        name: "SchoolAssesmentFormats",
        to: "/SchoolAdmin/SchoolAssesmentFormats",
      },

      { name: "SchoolGradingFormats", to: "/SchoolAdmin/SchoolGradingFormats" },
      { name: "PromoteStudents", to: "/SchoolAdmin/PromoteStudents" },
    ],
  },

  {
    name: "AdditionalSettings",
    exact: true,
    to: `/AdditionalSettings`,
    iconClassName: <BsSpeedometer2 />,
    dropDownIcon: <BsCaretDownFill />,
    dropUpIcon: <BsCaretUpFill />,
    subMenus: [
      {
        name: "UploadTermlyNewsletter",
        to: "/AdditionalSettings/UploadTermlyNewsletter",
      },
      {
        name: "ArchiveOfRemovedStudentNDStaff",
        to: "/AdditionalSettings/ArchiveOfRemovedStudentNDStaff",
      },
      { name: "ChangePassword", to: "/AdditionalSettings/ChangePassword" },
      { name: "SynchronizeData", to: "/AdditionalSettings/SynchronizeData" },
    ],
  },
];

function SideMenu({ onCollapse }) {
  const [inactive, setInactive] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  useEffect(() => {
    if (inactive) {
      // document.querySelectorAll('.sub-menu').forEach((el) => {el.classList.remove("active");});
      removeActiveClassFromSubMenu();
    }

    onCollapse(inactive);
  }, [inactive]);

  //just an improvment
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        // console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
          // setDropdown(!dropdown);
          // console.log(dropdown);
        }
      });
    });
  }, []);

  const onClick = (inactive) => {
    if (inactive) {
      setInactive(false);
    }
  };

  return (
    <>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="logo">
            <img src={logo} />
          </div>
          <p className="margin-left">Second Term 2021/2022 session</p>

          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
          </div>
        </div>
        <div className="search-controller">
          <button className="search-btn">
            <BsSearch />
          </button>
          <input type="text" placeholder="search" />
        </div>
        <div className="divider"></div>
        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                dropDownIcon={menuItem.dropDownIcon}
                dropUpIcon={menuItem.dropUpIcon}
                onClick={onClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
