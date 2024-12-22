import React from 'react';
import { Col, Modal, Row, Typography } from 'antd';
import { BugFilled, ClockCircleFilled, EditFilled, PhoneFilled, PrinterFilled, UserOutlined } from '@ant-design/icons';


interface AppointmentModalProps {
  visible: boolean;
  onCancel: () => void;
  appointmentDetails: string;  
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ visible, onCancel, appointmentDetails }) => {
  return (
    <Modal
      title={
        <Row>
          <Col span={20}>
            <Typography>

              นัดหมาย
            </Typography>
            <Typography>

              ทันตแพทย์ {appointmentDetails.split('|')[0]}
            </Typography>
          </Col>
          <Col span={4} style={{ fontSize: '3em' }}>
            <UserOutlined />
          </Col>
        </Row>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >

      <Row>
        <Col span={2}>

        </Col>
        <Col span={14}>
          <p><span style={{ fontSize: '1em', color: '#6ad8b3' }}><UserOutlined /></span> 6400004 | จรูณ ทดสอบ4</p>
          <p><span style={{ fontSize: '1em', color: '#6ad8b3' }}><BugFilled /></span> บริการ รักษารากฟัน</p>
          <p><span style={{ fontSize: '1em', color: '#6ad8b3' }}><PhoneFilled /></span> 095-646-0428</p>
          <p>ประเมินค่าใช้จ่าย 0.00</p>
          <p><span style={{ fontSize: '1em', color: '#6ad8b3' }}><ClockCircleFilled /></span> 18:00-18:30</p>

        </Col>
        <Col span={8}>
          <Row justify="space-around" align="bottom" style={{ height: '100%' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
              <span style={{ fontSize: '3em', color: '#6ad8b3', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <PrinterFilled />
              </span>
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
              <span style={{ fontSize: '3em', color: '#6ad8b3', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <EditFilled />
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export default AppointmentModal;
