import React from 'react'
import { Collapse } from 'antd';
import { connect } from 'react-redux'

import InspectUrls from './inspector-urls';

const Panel = Collapse.Panel;

const mapState = (state:any) => ({
});

const mapDispatch = (dispatch: any) => ({
    getV4InspectorConfigAsync: dispatch.v4Inspector.getV4InspectorConfigAsync
});

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

class v4Inspector extends React.PureComponent<Props>{
    constructor(props: Props) {
        super(props);
        this.props.getV4InspectorConfigAsync();
    }

    render(){
        return (
            <Collapse bordered={false} defaultActiveKey={['1','2']}>
                <Panel header="Hack Urls" key="1">
                    <InspectUrls />
                </Panel>
                <Panel header="App Mappings" key="2">
                    2
                </Panel>

            </Collapse>
        )
    }
}


export default connect(mapState, mapDispatch)(v4Inspector);
