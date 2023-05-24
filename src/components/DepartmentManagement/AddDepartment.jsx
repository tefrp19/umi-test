import { Button } from 'antd';
import Modal from 'antd/es/modal/Modal';
import { useState } from 'react';

function AddDepartment() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>添加部门</Button>
      <Modal
        open={open}
        title='Title'
        onOk={handleOk}
        onCancel={handleCancel}
      // footer={[
      //   <Button key='back' onClick={handleCancel}>
      //     Return
      //   </Button>,
      //   <Button key='submit' type='primary' loading={loading} onClick={handleOk}>
      //     Submit
      //   </Button>,
      //
      // ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default AddDepartment;