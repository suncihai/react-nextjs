import axios from 'axios';
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { getUsers, deleteUser } from '../store'
import { Table, Button, message } from 'antd'
import Column from 'antd/lib/table/Column';
import UserModal from '../components/UserModal'

const UsersContainer = styled.div`
   width: 1000px;
   margin: 0 auto;
   padding-top: 110px;
   padding-bottom: 100px;
`

const UserWrap = styled.div`
   display: inline-block;
   padding: 12.5px 0;
   margin-right: 20px;
   &:nth-child(4n) {
      margin-right: 0;
   }
   img {
      width: 235px;
   }
`
class Users extends React.Component {
   state = {
      loading: false,
   }

   componentDidMount() {
      this.getUsers()
   }

   getUsers = async () => {
       const ret = await axiosClient({
         method: 'GET',
         url: '/api/getusers',
       })

      if (ret.code === 0) {
         this.props.getUsers(ret.data)
      } 
   }

   deleteUser = async (name) => {
      this.setState({loading: true})
      const ret = await axiosClient({
        method: 'GET',
        url: '/api/deleteuser',
        params: {name: name},
      })

     if (ret.code === 0) {
        setTimeout(()=>{
          this.setState({loading: false})
          this.props.deleteUser(name)
        },800)
     } 
  }

   render(){
      const users = this.props.users
      const { loading } = this.state

      if(!users) {
         return <Loading /> 
      }else{
         return (
           <UsersContainer>
             <Table loading={loading} dataSource={users} rowKey={users => users.name}>
               <Column title="Name" dataIndex="name" key="name"></Column>
               <Column title="Age" dataIndex="age" key="age"></Column>
               <Column 
                  title="Action" 
                  key="action"
                  render={(text, user) => (
                     <span>
                       <Button type="primary" onClick={()=>this.deleteUser(user.name)}>Delete</Button>
                     </span>
                   )}/>
             </Table>
             <UserModal />
           </UsersContainer>
         )
      }
   }
}

const mapDispatchToProps = { getUsers, deleteUser }
const mapStateToProps = ({users}) => ({users})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Users)
