import axios from 'axios';
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { getUsers } from '../store'
import { Table } from 'antd'
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

   render(){
      const users = this.props.users;

      if(!users) {
         return <Loading /> 
      }else{
         return (
           <UsersContainer>
             <Table dataSource={users} rowKey={users => users.name}>
               <Column title="Name" dataIndex="name" key="name"></Column>
               <Column title="Age" dataIndex="age" key="age"></Column>
             </Table>
             <UserModal />
           </UsersContainer>
         )
      }
   }
}

const mapDispatchToProps = { getUsers }
const mapStateToProps = ({users}) => ({users})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Users)
