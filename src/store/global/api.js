/**
 * Created by longhaiyan on 17/3/30.
 */
import { env } from '@/utils/config'

const api = {
    dev: {
        'login': '/data?name=userInfo',
        'register': '/data?name=userInfo',
        'error': '/data?name=error',
        'getCode': 'data?name=get_check_code'

    },
    pro: {
        'login': '/user/login/data',
        'register': '/user/register/data'
    }
}
export default api[env]
