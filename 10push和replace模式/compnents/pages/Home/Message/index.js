import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Details from "./Details";

export default class Message extends Component {
    state = {
        msgArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
        ]
    }

    render() {
        const {msgArr} = this.state
        return (
            <div>
                <ul>
                    {
                        msgArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/*向路由组件传递params*/}
                                    {/* <Link to={`/home/message/details/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}

                                    {/*向路由组件传递search*/}
                                    {/*<Link to={`/home/message/details/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}

                                    {/*传递state*/}
                                    <Link replace={true} to={{pathname:'/home/message/details',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
                <hr/>
                {/*声明接收params信息*/}
                {/* <Route path="/home/message/details/:id/:title" component={Details}/>*/}

                {/*search无需接收参数*/}
                {/*<Route path="/home/message/details" component={Details}/>*/}

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/details" component={Details}/>


            </div>
        );
    }
}

