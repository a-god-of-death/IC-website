// 获取按钮元素
var loginButton = document.getElementById('loginButton');
var loggedInButton = document.getElementById('loggedInButton');

// 初始化时，只显示登录按钮，隐藏已登录按钮
loginButton.style.display = 'inline-block';
loggedInButton.style.display = 'none';

// 获取登录按钮元素
var loginButton = document.getElementById('loginButton');

// 设置回调URL
var callbackUrl = encodeURIComponent('https://gxyo6-maaaa-aaaap-qb5mq-cai.icp0.io/');

// 设置登录按钮的点击事件处理函数
loginButton.addEventListener('click', function() {
 // 重定向到登录页面，并包含回调URL的参数
 window.location.href = 'https://identity.ic0.app/?callback=' + callbackUrl;
});

    
