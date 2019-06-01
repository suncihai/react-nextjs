# react-nextjs

created a React-nextjs-redux framework with custom-server. 

* Node Setup
1. define different development environment with urls
2. customize server, map the api service, no CORS
3. integrated nextjs with antd, use next/css to make antd work
4. axiosServer make api calls to server, axiosClient is client inner request

* Config 
1. Unhandled Rejection (TypeError): Cannot read property 'call' of undefined when clicking      Link https://github.com/zeit/next.js/issues/5636
        https://github.com/zeit/next-plugins/issues/282

* Layout
1. use styled.component to define different components
2. Antd Modal is tricky, hide footer button and customize own foot is better.
3. Antd Input onChange event, directly pass e.target.value instead of e, otherwise could not    get target.value.
4. switch statement in jsx
5. video transition animation added

* Redux
1. use _app.js under pages folder, set the reduxStore
2. define actions and reducers in store.js
3. connect mapStateToProps and mapDispatchToProps with Components
4. workflow is action -> reducers -> state updated -> view

* Hook
1. See About.js 

* WebSocket
1. set up a new socket to get data
2. while route changes, remember to close socket to prevent memory leak

* Test API with SpringBoot
1. use localhost:8080 to test with SpringBoot Restful API 