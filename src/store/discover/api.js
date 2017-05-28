
import { env } from '@/utils/config'

const api = {
    dev: {
        'follow_list': '/data?name=follow_list',
        'follow_list_user': '/data?name=user_info_data',
        'popular':'/data?name=follow_list',
        'user_list':'/data?name=recommend_user',

    },
    pro: {
        'follow_list':'/project/following/list',
        'follow_list_user':'/user/info/data',
        'popular':'/project/latest/list',
        'user_list':'/recommend/user/list'

    }
}
export default api[env]