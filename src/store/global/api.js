/**
 * Created by longhaiyan on 17/3/30.
 */
import { env } from '@/utils/config'

const api = {
    dev: {
        'login': '/data?name=userInfo',
        'register': '/data?name=userInfo',
        'error': '/data?name=error',
        'getCode': '/data?name=get_check_code',
        'imgUpload':'/data?name=null',
        'loginOut':'/data?name=mirror',
        'autoLogin':'/data?name=userInfo',
        'msgReceive':'/data?name=msg_receive',
        'msgUpdate':'/data?name=mirror',
        'pwd':'/data?name=mirror',
    },
    pro: {
        'login': '/user/login/data',
        'register': '/user/register/data',
        'imgUpload':'/project/publish/data',
        'loginOut': '/user/logout/data',
        'autoLogin': '/user/home/data',
        'msgReceive':'/message/receive/data',
        'msgUpdate':'/message/receive/update',
        'pwd':'/user/profile/passsword/update',


    }
}
export default api[env]
