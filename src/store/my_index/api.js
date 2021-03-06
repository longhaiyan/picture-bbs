/**
 * Created by longhaiyan on 17/4/8.
 */
import { env } from '@/utils/config'

const api = {
    dev: {
        'waterfall': '/data?name=index_water_fall',
        'waterfall_add': '/data?name=index_water_fall_add'

    },
    pro: {
        'waterfall': '/index/picture/data'
    }
}
export default api[env]