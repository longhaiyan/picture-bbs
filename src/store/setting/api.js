
import { env } from '@/utils/config'

const api = {
    dev: {
        'userInfoPlus': '/data?name=user_info_plus',
        'error':'/data?name=error'

    },
    pro: {
        'userInfoPlus':'/user/profile/update'

    }
}
export default api[env]