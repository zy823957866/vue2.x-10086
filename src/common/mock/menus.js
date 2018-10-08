import Layer from '@/common/components/layout/index'

const _import = require('../router/_import_' + process.env.NODE_ENV);

const routes = [
    {
        path : '*',
        component : _import('common/components/errorPage/index'),
        hidden: true
    },{
        path : '/',
        redirect : '/dashboard/index',
        hidden: true
    },{
        path : '/dashboard',
        iconCls : 'el-icon-info',
        hidden : false,
        leaf : true,
        component : Layer,
        redirect : '/dashboard/index',
        children : [
            {
                path : 'index',
                hidden : false,
                name : '信息面板',
                leaf : true,
                component : _import('dashboard/view/index')
            }
        ]
    },{
        path : '/comm',
        iconCls : 'el-icon-edit-outline',
        hidden : false,
        leaf : false,
        name : '通信管理',
        component : Layer,
        redirect : '/comm/msisdnMge',
        children : [
            {
                path : 'msisdnMge',
                hidden : false,
                leaf : true,
                name : '物联卡信息管理',
                component : _import('commMge/view/msisdnMge')
            },{
                path : '/commState',
                hidden : false,
                leaf : false,
                component : Layer,
                name : '通信状态管理',
                redirect : 'commState/serviceQuery',
                children : [
                    {
                        path : 'serviceQuery',
                        hidden : false,
                        name : '数据服务查询',
                        leaf : true,
                        component : _import('commMge/view/serviceQuery')
                    },
                    {
                        path : 'switchQuery',
                        hidden : false,
                        name : '当前开关机状态查询',
                        leaf : true,
                        component : _import('commMge/view/switchQuery')
                    }
                ]
            },
            {
                path : 'serviceState',
                hidden : false,
                leaf : true,
                name : '通信服务状态',
                component : _import('commMge/view/serviceState')
            }
        ]
    },
    {
        path : '/alarm',
        iconCls : 'el-icon-bell',
        hidden : false,
        leaf : false,
        name : '告警规则',
        component : Layer,
        redirect : '/alarm/management',
        children : [
            {
                path : 'management',
                hidden : false,
                name : '规则管理',
                leaf : true,
                component : _import('alarm/view/management')
            },{
                path : 'logs',
                hidden : false,
                name : '规则执行日志',
                leaf : true,
                component : _import('alarm/view/logs')
            }
        ]
    },
    {
        path : '/statics',
        iconCls : 'el-icon-menu',
        hidden : false,
        leaf : false,
        name : '统计报表',
        component : Layer,
        redirect : '/statics/currentMsisdn',
        children : [
            {
                path : 'currentMsisdnReport',
                hidden : false,
                name : '当前卡状态报表',
                leaf : true,
                component : _import('statics/view/currentMsisdn')
            },{
                path : 'useReport',
                hidden : false,
                name : '用量统计报表',
                leaf : true,
                component : _import('statics/view/useReport')
            },{
                path : 'separationReport',
                hidden : false,
                name : '机卡分离报表',
                leaf : true,
                component : _import('statics/view/separationReport')
            },{
                path : 'groupReport',
                hidden : false,
                name : '群组统计',
                leaf : true,
                component : _import('statics/view/groupReport')
            }
        ]
    }
];

export default routes;