import hmUI from '@zos/ui'

Page({
  onInit() {
    console.log('index onInit: serviço BG já iniciado (ou em execução)')

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 40, y: 120, w: 400, h: 80,
      text: 'Serviço BG ativo!',
      text_size: 24,
      align_h: hmUI.align.CENTER_H,
      color: 0xffffff
    })
  }
})
