import { Button,Modal } from "antd";
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

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>นัดหมาย</p>
                <p>ทันตแพทย์ คุณหมอจุดจุดจุด</p>
                <p>Some contents...</p>
            </Modal>

        </>
    )
}
export default ModalJa