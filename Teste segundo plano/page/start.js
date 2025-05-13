import { queryPermission, requestPermission } from '@zos/app'
import * as appService from '@zos/app-service'
import hmUI from '@zos/ui'

const BG_PERM = ['device:os.bg_service']
const SERVICE_URL = 'app-service/bg'

Page({
  onInit() {
    // 1) checa se já temos permissão
    const [status] = queryPermission({ permissions: BG_PERM })
    if (status === 2) {
      // ok, já está autorizado
      this._startBgService()
    } else {
      // pede permissão
      requestPermission({
        permissions: BG_PERM,
        callback: ([res]) => {
          if (res === 2) {
            this._startBgService()
          } else {
            hmUI.showToast({ text: 'Permissão negada' })
          }
        }
      })
    }
  },

  _startBgService() {
    hmUI.showToast({ text: 'Iniciando serviço BG…' })
    appService.start({
      url: SERVICE_URL,
      param: '',
      complete_func: info => {
        hmUI.showToast({ text: `Serviço iniciado: ${info.result}` })
        // fecha a UI imediatamente
        hmUI.exit()
      }
    })
  }
})
