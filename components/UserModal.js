
import React, { Component } from 'react';
import { axiosClient } from '../common/js/axios'
import { connect } from 'react-redux'
import { Modal, Button, Form, Input, message } from 'antd'
import { addUser, deleteUser } from '../store'

class UserModal extends React.Component {
   state = {
      isShown: false,
      loading: false,
   }

   setShown(shown) {
      this.setState({isShown:shown})
   }

   handleSubmit(e) {
      e.preventDefault();
      this.setState({loading: true},()=>{
         this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              let params = {
                 name: values.name,
                 age: values.age,
              }
              this.addUser(params)
            }
          });
      })
    };

   addUser = async (params) => {
      const ret = await axiosClient({
        method: 'GET',
        url: '/api/adduser',
        params: params,
      })

     if (ret.code === 0) {
        setTimeout(()=>{
          this.props.addUser(ret.data)
          this.setState({isShown: false, loading: false})
          message.success(`You Add ${params.name}!`)
        },800)
     } 
  }
   
   render() {
      const { isShown, loading } = this.state
      const { getFieldDecorator } = this.props.form
      const formItemLayout = {
         labelCol: {
           xs: { span: 24 },
           sm: { span: 4 },
         },
         wrapperCol: {
           xs: { span: 24 },
           sm: { span: 20 },
         },
       };

      return ( 
         <>
           <Button type="primary" style={{marginBottom:'20px'}} onClick={()=>this.setShown(true)}>New User</Button>
           <Modal
             title="Add New User"
             visible={isShown}
             loading={loading}
             footer={null}
             onOK={(e)=>this.handleSubmit(e)}
             onCancel={()=>this.setShown(false)}
           >
              <Form {...formItemLayout} onSubmit={(e)=>this.handleSubmit(e)}>
               <Form.Item label="Name">
                  {getFieldDecorator('name', {
                     rules: [
                        {
                           required: true,
                           message: 'Please input user name',
                        },
                     ],
                  })(<Input />)}
               </Form.Item>
               <Form.Item label="Age">
                  {getFieldDecorator('age', {
                     rules: [
                        {
                           required: true,
                           message: 'Please input user age',
                        },
                     ],
                  })(<Input />)}
               </Form.Item>
               <Form.Item>
                  <Button type="primary" onClick={(e)=>this.handleSubmit(e)}>Add</Button>
               </Form.Item>
            </Form>
           </Modal>
         </>
      )
   }
}

const mapDispatchToProps = { addUser, deleteUser }

export default connect(
   null,
   mapDispatchToProps
 )(Form.create()(UserModal))
