export class NotificationService {

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
    this.hideMessageTimeout = setTimeout(() => this.visible = false, 2000);
  }
}