
import React, { useState } from "react";
import { Table } from "antd";
import AppointmentModal from "./AppointmentModal";

const AppointmentTable: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [appointmentDetails, setAppointmentDetails] = useState<string>("");

  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentHour = 9;
    let currentMinute = 0;

    while (currentHour < 19 || (currentHour === 19 && currentMinute === 0)) {
      const time = `${String(currentHour).padStart(2, "0")}:${String(
        currentMinute
      ).padStart(2, "0")}`;
      const details =
        time === "11:00"
          ? "ภัทราพร ชัยพชร์ | ครอบฟันหรือสะพานฟัน | 6401002 | 0924835486 เวลา 11.00-11.30 น."
          : time === "14:30"
            ? "กันยา ยน | ผ่าฟันคุด | 6401009 | 0000000000 เวลา 14.30-15.00 น."
            : "";
      timeSlots.push({ key: time, time, details });
      currentMinute += 30;
      if (currentMinute === 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }
    return timeSlots;
  };

  const handleRowClick = (details: string) => {
    if (details) {
      setAppointmentDetails(details);
      setIsModalOpen(true);
    }
  };

  const columns = [
    {
      title: "",
      dataIndex: "time",
      key: "time",
      width: "20%",
      render: (text: string) => <div style={{ textAlign: "center" }}>{text}</div>,
    },
    {
      title: "",
      dataIndex: "details",
      key: "details",
      render: (text: string, record: any) => {
        const isAppointment = text !== "";
        return (
          <div
            onMouseEnter={() => isAppointment && setHoveredRow(record.key)}
            onMouseLeave={() => isAppointment && setHoveredRow(null)}
            onClick={() => handleRowClick(text)}
            className={`details-cell ${hoveredRow === record.key ? "hovered" : ""
              }`}
          >
            {isAppointment ? text : "-"}
          </div>
        );
      },
    },
  ];

  const data = generateTimeSlots();

  return (
    <div
      style={{
        padding: "0",
        margin: "0",
        background: "#f0f2f5",
        height: "80vh",
        overflow: "auto",
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        style={{
          background: "#ffffff",
          margin: "0",
          padding: "0",
        }}
        showHeader={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
        className="custom-table"
      />

      <AppointmentModal
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        appointmentDetails={appointmentDetails}
      />
    </div>
  );
};

export default AppointmentTable;
