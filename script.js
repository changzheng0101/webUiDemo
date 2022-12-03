const projects = [
    {
        "projectLink": "./01-Expanding Cards/index.html",
        "title": "Expanding Cards",
        "content": "扩展卡片，点击某张卡片则会放大某张卡片",
        "imgUrl": "./ResultImg/ExpandingCards.png",
        "imgAlt": "ExpandingCards"
    },
    {
        "projectLink": "./02-Progress Bar/index.html",
        "title": "Progress Bar",
        "content": "进度条，点击之后会跳转到下一个节点。",
        "imgUrl": "./ResultImg/progressBar.png",
        "imgAlt": "ProgressBar"
    },
    {
        "projectLink": "./03-RotatingNavigation/index.html",
        "title": "RotatingNavigation",
        "content": "实现旋转导航",
        "imgUrl": "./ResultImg/RotaingNavgation.gif",
        "imgAlt": "RotatingNavigation"
    },
    {
        "projectLink": "./04-Search/index.html",
        "title": "Search",
        "content": "实现搜索框，点击图标即可展开搜索框，点击外部或者再次点击图标，关闭搜索框。",
        "imgUrl": "./ResultImg/Search.gif",
        "imgAlt": "Search"
    },
    {
        "projectLink": "./05-BlurLoading/index.html",
        "title": "BlurLoading",
        "content": "模糊加载，数字自动从0-100，数字透明度变高，背景的模糊程度变小。",
        "imgUrl": "./ResultImg/BlurLoading.gif",
        "imgAlt": "BlurLoading"
    },
    {
        "projectLink": "./06-ScrollAnimation/index.html",
        "title": "ScrollAnimation",
        "content": "向下滑动或者向上滑动时，让content进入或离开。",
        "imgUrl": "./ResultImg/ScrollAnimation.gif",
        "imgAlt": "ScrollAnimation"
    },
    {
        "projectLink": "./07-SplitLoginPage/index.html",
        "title": "SplitLoginPage",
        "content": "一个简单的登录页面，鼠标悬浮在某一侧时，会拉伸这一部分。",
        "imgUrl": "./ResultImg/SplitLoginPage.gif",
        "imgAlt": "SplitLoginPage"
    },
    {
        "projectLink": "./08-LoginForm/index.html",
        "title": "LoginForm",
        "content": "登录页面，点击某一个输入框之后，label会有波纹上升的效果。",
        "imgUrl": "./ResultImg/LoginForm.gif",
        "imgAlt": "LoginForm"
    },
    {
        "projectLink": "./09-ButtonAudio/index.html",
        "title": "ButtonAudio",
        "content": "一堆按钮，点击某个按钮之后会发出对应的声音，如果有其他声音正在播放，会暂停别的声音开始播放新的声音。",
        "imgUrl": "./ResultImg/9-ButtonAudio.png",
        "imgAlt": "ButtonAudio"
    },
    {
        "projectLink": "./10-FetchJoke/index.html",
        "title": "FetchJoke",
        "content": "发起异步请求，有fetch和async+await两种方式。",
        "imgUrl": "./ResultImg/10-FetchJoke.gif",
        "imgAlt": "FetchJoke"
    },
    {
        "projectLink": "./11-keyCodes/index.html",
        "title": "keyCodes",
        "content": "按下按键之后，会展示这个按键的key、keycode和code",
        "imgUrl": "./ResultImg/11-keyCodes.gif",
        "imgAlt": "keyCodes"
    },
    {
        "projectLink": "./12-FAQExpand/index.html",
        "title": "FAQExpand",
        "content": "点击按钮，完成答案的展开和收缩",
        "imgUrl": "./ResultImg/12--FAQExpand.gif",
        "imgAlt": "FAQExpand"
    },
    {
        "projectLink": "./13-RandomSelect/index.html",
        "title": "RandomSelect",
        "content": "随机选择，下面的label是上面输入字符串用逗号分隔的结果，会忽略空白字符，按下`Enter`后从这些label中随机选择最终结果。",
        "imgUrl": "./ResultImg/13-RandomSelect.gif",
        "imgAlt": "RandomSelect"
    },
    {
        "projectLink": "./14-AnimationNav/index.html",
        "title": "AnimationNav",
        "content": "通过点击来完成导航的拉伸和缩放",
        "imgUrl": "./ResultImg/14-AnimationNav.gif",
        "imgAlt": "AnimationNAv"
    },
    {
        "projectLink": "./15-IncrementCounter/index.html",
        "title": "IncrementCounter",
        "content": "自动增加到某一个数值",
        "imgUrl": "./ResultImg/15-IncrementCounter.gif",
        "imgAlt": "IncrementCount"
    },
    {
        "projectLink": "./16-DrinkWater/index.html",
        "title": "DrinkWater",
        "content": "模拟喝水，一个不错的锻炼css和js的项目",
        "imgUrl": "./ResultImg/16-drinkWater.gif",
        "imgAlt": "drinkWater"
    },
    {
        "projectLink": "./17-MovieShow/index.html",
        "title": "MovieShow",
        "content": "集成第三方API，申请电影，并将最终的结果进行渲染，同时完成了搜索功能。",
        "imgUrl": "./ResultImg/17-movieApp.gif",
        "imgAlt": "MovieShow"
    },
    {
        "projectLink": "./18-BackSliders/index.html",
        "title": "BackSliders",
        "content": "点击按钮，切换背景图片",
        "imgUrl": "./ResultImg/18-BackSlide.gif",
        "imgAlt": "BackSlide"
    },
    {
        "projectLink": "./19-TimeClock/index.html",
        "title": "TimeClock",
        "content": "模仿时钟运行，并完成了黑夜模式和白天模式的切换",
        "imgUrl": "./ResultImg/19-TimeClock.gif",
        "imgAlt": "TimeClock"
    },
    {
        "projectLink": "./20-ButtonPro/index.html",
        "title": "ButtonPro",
        "content": "特殊的点击效果，点击按钮会出现水波纹的效果",
        "imgUrl": "./ResultImg/20-ButtonPro.gif",
        "imgAlt": "ButtonPro"
    },
    {
        "projectLink": "./21-DragAndDrop/index.html",
        "title": "DragAndDrop",
        "content": "拖动完成图片的放置",
        "imgUrl": "./ResultImg/21-DragAndDrop.gif",
        "imgAlt": "DragAndDrop"
    },
    {
        "projectLink": "./22-canvas/index.html",
        "title": "canvas",
        "content": "简单的画板网页，可以改变笔的粗细和笔的颜色，可清除画板",
        "imgUrl": "./ResultImg/22-canvas.gif",
        "imgAlt": "canvas"
    },
    {
        "projectLink": "./23-cssLoading/index.html",
        "title": "cssLoading",
        "content": "用css实现网页loading",
        "imgUrl": "./ResultImg/23-cssLoading.gif",
        "imgAlt": "cssLoading"
    },
    {
        "projectLink": "./24-ContentPlaceholder/index.html",
        "title": "ContentPlaceholder",
        "content": "内容预加载",
        "imgUrl": "./ResultImg/24-contentPlaceholder.gif",
        "imgAlt": "contentPlaceholder"
    },
    {
        "projectLink": "./25-stickyHeader/index.html",
        "title": "stickyHeader",
        "content": "顶部导航栏，可以根据滚动幅度进行伸缩",
        "imgUrl": "./ResultImg/25-stickyNavigation.gif",
        "imgAlt": "stickyNavigation"
    },
    {
        "projectLink": "./26-doubleVerticalSlider/index.html",
        "title": "doubleVerticalSlider",
        "content": "双垂直滑块，点击按钮之后，两边可以同时进行切换",
        "imgUrl": "./ResultImg/26-doubleVerticalSlide.gif",
        "imgAlt": "doubleVerticalSlide"
    },
    {
        "projectLink": "./27-toast/index.html",
        "title": "toast",
        "content": "用toast实现简单通知",
        "imgUrl": "./ResultImg/27-toasts.gif",
        "imgAlt": "toastNotification"
    },
    {
        "projectLink": "./28-githubProfile/index.html",
        "title": "githubProfile",
        "content": "可以用搜索栏搜索GitHub个人信息",
        "imgUrl": "./ResultImg/28-GitHubProfile.gif",
        "imgAlt": "githubProfile"
    },
    {
        "projectLink": "./29-mobileNavigation/index.html",
        "title": "mobileNavigation",
        "content": "在web网页上实现一个类似手机的导航栏",
        "imgUrl": "./ResultImg/29-MobileNavigation.gif",
        "imgAlt": "mobileNavigation"
    },
    {
        "projectLink": "./30- PasswordChecker/index.html",
        "title": " PasswordChecker",
        "content": "根据密码的长度改变背景的透明度，结合tailwind进行开发",
        "imgUrl": "./ResultImg/30-Password.gif",
        "imgAlt": "PasswordChecker"
    },
    {
        "projectLink": "./31-notesApp/index.html",
        "title": "notesApp",
        "content": "可以创建和删除便签，并且将便签保存到LocalStorage，刷新不会丢失数据,支持markdown语法",
        "imgUrl": "./ResultImg/31-notes.gif",
        "imgAlt": "notes"
    },
    {
        "projectLink": "./32-todoList/index.html",
        "title": "todoList",
        "content": "todo清单，左键可以改变每一项的状态，右键可以删除，使用了LocalStorage缓存，每次刷新不会丢失数据",
        "imgUrl": "./ResultImg/32-todoList.gif",
        "imgAlt": "todos"
    },
    {
        "projectLink": "./33-liveUserFilter/index.html",
        "title": "liveUserFilter",
        "content": "实时用户过滤，通过第三方API获取用户进行渲染，并完成搜索功能",
        "imgUrl": "./ResultImg/33-liveUserFilter.gif",
        "imgAlt": "liveUserFilter"
    },
    {
        "projectLink": "./34-AnimationScroll/index.html",
        "title": "AnimationScroll",
        "content": "滚动页面的时候最上面会有指示条，显示当前所处的位置。",
        "imgUrl": "./ResultImg/34-animationScroll.gif",
        "imgAlt": "animationScroll"
    },
    { 
        "projectLink": "./35-CountDown/index.html",
        "title": "CountDown",
        "content": "简易的加载倒计时",
        "imgUrl": "./ResultImg/35-CountDown.gif",
        "imgAlt": "countDown"
    },
    {
        
        "projectLink": "./36-verifyCode/index.html",
        "title": "verifyCode",
        "content": "六位验证码实现，每个框中只能输入一个数字。",
        "imgUrl": "./ResultImg/36-verifyCode.gif",
        "imgAlt": "verifyCode"
    }
]

const projectsEl = document.querySelector('#projects')
projects.forEach(project =>{
    const projectEl = document.createElement('div');

    projectEl.innerHTML = `
        <a href="#" class="image"><img src="${project.imgUrl}" alt="${project.imgAlt}" /></a>
        <h3>${project.title}</h3>
        <p>${project.content}</p>
        <ul class="actions">
            <li><a href="${project.projectLink}" class="button">在线预览</a></li>
        </ul>
    `
    projectsEl.appendChild(projectEl)
})

