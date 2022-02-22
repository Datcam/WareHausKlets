export class NotificationService {

  NOTIFICATION_DURATION_TIME: number = 2000;
  messageText!: string;
  visible!: boolean;
  hideMessageTimeout!: any;

  showMessage(text: string) {
    this.messageText = text;
    this.visible = true;
    clearTimeout(this.hideMessageTimeout);
    this.hideMessage();
  }

  private hideMessage() {
    this.hideMessageTimeout = setTimeout(() => this.visible = false, this.NOTIFICATION_DURATION_TIME);
  }
}