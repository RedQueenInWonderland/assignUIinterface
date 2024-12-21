import { ClockCircleOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button,Col,Modal, Row, Typography } from "antd";
import { useState } from "react";


const ModalJa = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
        <>

            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal title={
              // <div>Custom Title</div>
          <Row>
            <Col span={20}>
              <Typography>

                นัดหมาย
              </Typography>
              <Typography>

                ทันตแพทย์ คุณหมอจุดจุดจุด
              </Typography>
            </Col>
            <Col span={4} style={{fontSize:'3em'}}>
            <UserOutlined />
            </Col>
          </Row>
        }
          open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
<Row>
<Col span={2}></Col>
<Col span={14}>
<UserOutlined />

<PhoneOutlined />
<ClockCircleOutlined />

</Col>
<Col span={8}>

</Col>
</Row>

                <p>นัดหมาย</p>
                <p>ทันตแพทย์ คุณหมอจุดจุดจุด</p>
                <p>Some contents...</p>
            </Modal>

        </>
    )
}
export default ModalJa