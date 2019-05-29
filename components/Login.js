
import React, { Component } from 'react';
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import { Button, Form, Input, message, Spin } from 'antd'
import { MD5 } from 'crypto-js'
import Router from 'next/router'
import Cookies from 'js-cookie'

const LoginBody = styled.div`
   min-height: 93vh;
   padding-top: 200px;
   width: 400px;
   margin: 0 auto;
`

class Login extends React.Component {
   state = {
      loading: false,
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
         if (!err) {
            let params = {
               username: values.username,
               password: MD5(values.password).toString(),
            }
            this.setState({loading: true},()=>{
               this.login(params)
            });
         }
      })
    };

   login = async (params) => {
      const ret = await axiosClient({
        method: 'GET',
        url: '/api/login',
        params: params,
      })

     if (ret.code === 0) {
        setTimeout(()=>{
          this.setState({loading: false})
          message.success(`Welcomse back ${params.username}!`)
          Cookies.set('testUserName', params.username, {expires:1})
          Router.replace('/user')
        },800)
     } else if (ret.cde === -7){
         setTimeout(()=>{
         message.error(`${params.username} is not found`)
         this.setState({loading: false})
         },800)
     } else if (ret.cde === -8){
         setTimeout(()=>{
         message.error('Password is wrong!')
         this.setState({loading: false})
         },800)
     } 
  }
   
   render() {
      const { loading } = this.state
      const { getFieldDecorator } = this.props.form

      const ls = {
          textAlign: 'center',
          fontSize: '20px',
          marginBottom: '15px'
      }

      const bs = {
         width: '100%'
      }

      return ( 
         <LoginBody>
            <Spin spinning={loading}>
               <div style={ls}>Login</div>
               <Form onSubmit={(e)=>this.handleSubmit(e)}>
                  <Form.Item label="Name">
                     {getFieldDecorator('username', {
                        rules: [
                           {
                              required: true,
                              message: 'Please input user name',
                           },
                        ],
                     })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Password">
                     {getFieldDecorator('password', {
                        rules: [
                           {
                              required: true,
                              message: 'Please input user password',
                           },
                        ],
                     })(<Input type="password"/>)}
                  </Form.Item>
                  <Form.Item>
                     <Button style={bs} type="primary" onClick={(e)=>this.handleSubmit(e)}>Login</Button>
                  </Form.Item>
               </Form>
            </Spin>
         </LoginBody>
      )
   }
}

export default Form.create()(Login)
