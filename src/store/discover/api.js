
import { env } from '@/utils/config'

const api = {
    dev: {
        'waterfall': '/data?name=index_water_fall',
        'waterfall_add': '/data?name=index_water_fall_add',
        'follow_list': '/data?name=follow_list',
        'follow_list_user': '/data?name=user_info_data',

    },
    pro: {
        'follow_list':'/project/following/list',
        'follow_list_user':'/user/info/data'

    }
}
export default api[env]