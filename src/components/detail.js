import React from 'react'
class Home extends React.Component {

    render() {
        return (
            <div>
                我是详情页--------

                {this.props.location.state.sid}
                {/*{console.log(this.props.match.params.id)}*/}
                {/*{console.log(this.props.location.query.qid)}*/}
                {console.log(this.props.location.state.sid)}
                <button onClick={this.link.bind(this)}>返回</button>
            </div>
        )
    }
    link(){
        this.props.history.go(-1)
    }

}

export default Home;
