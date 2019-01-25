(function () {
    "use strict";

    var cellToHighlight;
    var messageBanner;

    // 每次加载新页面时都必须运行初始化函数
    Office.initialize = function (reason) {
        $(document).ready(function () {
            // 初始化 FabricUI 通知机制并隐藏
            var element = document.querySelector('.ms-MessageBanner');
            messageBanner = new fabric.MessageBanner(element);
            messageBanner.hideBanner();

            // 如果未使用 Excel 2016，请使用回退逻辑。
            if (!Office.context.requirements.isSetSupported('ExcelApi', '1.1')) {
                $("#template-description").text("此示例将显示电子表格中选定单元格的值。");
                $('#button-text').text("显示!");
                $('#button-desc').text("显示所选内容");

                $('#highlight-button').click(displaySelectedCells);
                return;
            }

        });
    };

})();
