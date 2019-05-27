import { debounce } from 'lodash'
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { getUsers, deleteUser, searchWord, searchUser } from '../store'
import { Table, Button, message, Input } from 'antd'
import Column from 'antd/lib/table/Column';
import UserModal from '../components/UserModal'

const UsersContainer = styled.div`
   width: 1000px;
   min-height: 350px;
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
         this.props.searchUser(this.props.searchword)
      } 
   }

   searchUser = debounce((value) => {
      this.props.searchWord(value)
      this.props.searchUser(value)
   },250)

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
          this.props.searchUser(this.props.searchword)
        },800)
     } 
  }

   render(){
      const { loading } = this.state
      const users = this.props.searchusers
      const Search = Input.Search

      const searchStyle = {
         marginBottom: '20px',
         width: '200px',
      }

      if(!users) {
         return <Loading /> 
      }else{
         return (
           <UsersContainer>
            <div style={{textAlign:'right'}}>
               <Search 
                  style={searchStyle}
                  placeholder="input search text"
                  onChange={e=>this.searchUser(e.target.value)}
               />
            </div>
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
             <UserModal updateUser={this.updateUser}/>
           </UsersContainer>
         )
      }
   }
}

const mapDispatchToProps = { getUsers, deleteUser, searchWord, searchUser }
const mapStateToProps = ({users, searchword, searchusers}) => ({users, searchword, searchusers})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Users)
