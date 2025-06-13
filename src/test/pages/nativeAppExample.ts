import AllureReporter from '@wdio/allure-reporter';

class NativeApp {

    /* =====================================================================  ELEMENTS ============================================================================== */

    // listOption(option: string) { return $(`android=.text("${option}")`) }
    // title(option: string) { return $(`android=.text("${option}")`) }
     get bouncingBalls() { return $('android=.text("Bouncing Balls")') }
    // get actionBar() { return $('android=.resourceId("android:id/action_bar")') }
    get signIn() {return $('//android.widget.Button[@content-desc="Sign in"]')}
    /* ========================================================================= ACTIONS ================================================================================ */


    async selectOption(option: string) {
        AllureReporter.addStep(`Tab on the following option ${option}`)
        await this.signIn.click()
        return this;
    }

}

export default new NativeApp();