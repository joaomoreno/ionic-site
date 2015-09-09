import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {IonicView} from 'ionic/ionic';
import {ActionMenu} from 'ionic/components/action-menu/action-menu';
class IonicApp {
  constructor(ActionMenu) {
    this.ActionMenu = ActionMenu;
  }
  openMenu() {
    this.ActionMenu.open({
      buttons: [{text: 'Share This'}, {text: 'Move'}],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('Canceled');
      },
      destructiveButtonClicked: () => {
        console.log('Destructive clicked');
      },
      buttonClicked: function(index) {
        console.log('Button clicked', index);
        if (index == 1) {
          return false;
        }
        return true;
      }
    }).then((actionMenu) => {
      this.actionMenu = actionMenu;
    });
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-app',
      appInjector: [ActionMenu]
    }), new IonicView({templateUrl: 'main.html'})];
  }});
Object.defineProperty(IonicApp, "parameters", {get: function() {
    return [[ActionMenu]];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}