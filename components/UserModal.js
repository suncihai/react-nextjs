
import React, { Component } from 'react';
import { axiosClient } from '../common/js/axios'
import { connect } from 'react-redux'
import { Modal, Button, Form, Input, message, Spin } from 'antd'
import { addUser, searchUser } from '../store'

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
      this.props.form.validateFieldsAndScroll((err, values) => {
         if (!err) {
            let params = {
               name: values.name,
               age: values.age,
            }
            this.setState({loading: true},()=>{
            this.addUser(params)
            });
         }
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
          this.props.searchUser(this.props.searchword)
          this.setState({isShown: false, loading: false})
          message.success(`You Add ${params.name}!`)
        },800)
     } else if (ret.code === -2) {
        message.error(`${params.name} is already on the list!`)
        this.setState({loading: false})
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
             footer={null}
             onOK={(e)=>this.handleSubmit(e)}
             onCancel={()=>this.setShown(false)}
           >
              <Spin spinning={loading}>
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
              </Spin>
           </Modal>
         </>
      )
   }
}


const mapDispatchToProps = { addUser,searchUser }
const mapStateToProps = ({searchword}) => ({searchword})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Form.create()(UserModal))
