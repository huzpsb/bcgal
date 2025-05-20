// SDS-20抑郁症量表

window.tasks = [
    {name: 'c_1', modifiers: ['score|1'], virtual: 'back'},
    {name: 'c_2', modifiers: ['score|2'], virtual: 'back'},
    {name: 'c_3', modifiers: ['score|3'], virtual: 'back'},
    {name: 'c_4', modifiers: ['score|4'], virtual: 'back'},
    {name: 'back', modifiers: ['next|0'], virtual: 'q_{next}'},
    {
        name: '开始',
        modifiers: ['score|0', 'next|0'],
        chats: ['抑郁症自测量表（哎 你怎么用Gal的模板在写）'],
        choices: ['重新阅读|开始', '开始答题|q_0']
    },
    {
        name: 'q_0',
        modifiers: ['next|1'],
        chats: ['我感到情绪沮丧，郁闷。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_1',
        modifiers: ['next|2'],
        chats: ['我感到早晨心情最好。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_2',
        modifiers: ['next|3'],
        chats: ['我要哭或想哭。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_3',
        modifiers: ['next|4'],
        chats: ['我夜间睡眠不好。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_4',
        modifiers: ['next|5'],
        chats: ['我吃饭像平常一样多。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_5',
        modifiers: ['next|6'],
        chats: ['我的性功能正常。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_6',
        modifiers: ['next|7'],
        chats: ['我感到体重减轻。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_7',
        modifiers: ['next|8'],
        chats: ['我为便秘烦恼。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_8',
        modifiers: ['next|9'],
        chats: ['我的心跳比平时快。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_9',
        modifiers: ['next|10'],
        chats: ['我无故感到疲乏。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_10',
        modifiers: ['next|11'],
        chats: ['我的头脑像平常一样清楚。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_11',
        modifiers: ['next|12'],
        chats: ['我做事情像平常一样不感到困难。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_12',
        modifiers: ['next|13'],
        chats: ['我坐卧难安，难以保持平静。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_13',
        modifiers: ['next|14'],
        chats: ['我对未来感到有希望。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_14',
        modifiers: ['next|15'],
        chats: ['我比平时更容易激怒。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_15',
        modifiers: ['next|16'],
        chats: ['我对未来感到有希望。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_16',
        modifiers: ['next|17'],
        chats: ['我觉得决定什么事很容易。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_17',
        modifiers: ['next|18'],
        chats: ['我感到自己是有用的和不可缺少的人。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_18',
        modifiers: ['next|19'],
        chats: ['假若我死了，别人会过得更好。'],
        choices: ['从无或偶尔|c_1', '有时|c_2', '经常|c_3', '总是如此|c_4']
    },
    {
        name: 'q_19',
        modifiers: ['next|20'],
        chats: ['我仍旧喜欢自己平时喜欢的东西。'],
        choices: ['从无或偶尔|c_4', '有时|c_3', '经常|c_2', '总是如此|c_1']
    },
    {
        name: 'q_20',
        cond: ['score|43|轻度', 'score|50|中度', 'score|56|重度'],
        virtual: '无'
    },
    {
        name: '无',
        chats: [
            'SDS显示您的心理健康状况良好，您可以继续保持良好的心态。'
        ],
        end: '心理健康'
    },
    {
        name: '轻度',
        chats: [
            'SDS显示您可能有轻度抑郁的情况，建议您多与他人交流，保持良好的心态。'
        ],
        end: '轻度？'
    },
    {
        name: '中度',
        chats: [
            'SDS显示您可能有中度抑郁的情况，建议您及时寻求专业的心理咨询。'
        ],
        end: '中度？'
    },
    {
        name: '重度',
        chats: [
            'SDS显示您的心理健康状况不佳，建议您及时寻求专业的心理咨询。'
        ],
        end: '重度？'
    }
]
window.begin_n = '开始';
