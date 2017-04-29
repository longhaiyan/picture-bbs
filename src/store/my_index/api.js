/**
 * Created by longhaiyan on 17/4/8.
 */
import { env } from '@/utils/config'

const api = {
    dev: {
        'waterfall': '/data?name=index_water_fall'

    },
    pro: {
        'waterfall': '/picture/index/data'
    }
}
export default api[env]