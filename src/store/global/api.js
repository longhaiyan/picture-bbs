/**
 * Created by longhaiyan on 17/3/30.
 */
import { env } from '@/utils/config'

const api = {
    dev: {
        'login': '/data?name=userInfo',
        'register': '/data?name=userInfo',
        'error': '/data?name=error',
        'getCode': 'data?name=get_check_code',
        'imgUpload':'data?name=null',
        'loginOut':'data?name=mirror',
        'autoLogin':'data?name=userInfo',



    },
    pro: {
        'login': '/user/home/data',
        'register': '/user/register/data',
        'imgUpload':'/project/publish/data',
        'loginOut': '/user/logout/data'
    }
}
export default api[env]
