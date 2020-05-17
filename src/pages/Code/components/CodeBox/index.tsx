import React, { useState, useEffect } from 'react'
import { Resizable, ResizeCallbackData } from 'react-resizable';
import { PlayCircleOutlined, CopyOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { Tooltip } from 'antd';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/htmlmixed/htmlmixed';

export default function CodeBox() {
    const [width, setWidth] = useState(500);
    const [code, setCode] = useState('');
    useEffect(()=>{
        //生产环境请求静态资源要加上服务器前缀
        const htmlUrl = process.env.NODE_ENV==="development"?'/graph-html/shape/node.html':
        '/graphvisible-help/graph-html/shape/node.html';
        fetch(htmlUrl).then(res=>res.text()).then(data=>{
            setCode(data);
        })
    },[])

    function onResize(event: React.SyntheticEvent, { size }: ResizeCallbackData) {
        setWidth(size.width);
    }

    return (
        <Resizable
            width={width}
            height={0}
            axis='x'
            onResize={onResize}
            handle={
                <span
                    className="my-resizable-handle"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                />
            }
            resizeHandles={['e']}
        ><div style={{ width }} className={styles.codeBox}>
                <div className={styles.toolbar}>
                    <Tooltip placement="top" title='执行'>
                        <PlayCircleOutlined style={{ marginLeft: 12,cursor:'pointer' }} />
                    </Tooltip>
                    <Tooltip placement="top" title='复制'>
                        <CopyOutlined style={{ marginLeft: 12,cursor:'pointer' }} />
                    </Tooltip>
                </div>
                <CodeMirror
                    className={styles.codeCont}
                    value={code}
                    options={{
                        mode: 'htmlmixed',
                        theme: 'default'
                    }}
                    onChange={(editor, data, value) => {
                        setCode(value)
                    }}
                />
            </div>
        </Resizable>
    )
}
