(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Main.xfdl", function() {
        this.Form_Work_onload = function(obj,e)
        {
        	var url = nexacro._project_url+"kakaoMap.html"
        	this.WebBrowser00.set_url(url);

        	var dom = this.WebBrowser00.getProperty( "document" ).getProperty("body");
        	var kakaoMap;
        	kakaoMap += '<div id="map" style="width:100%;height:1000px;"></div>';
        	kakaoMap += '<script>';
        	kakaoMap += 'var container = document.getElementById("map");';
        	kakaoMap += 'var options = { center: new kakao.maps.LatLng(33.450701, 126.570667),level: 3}';
        	kakaoMap += 'var map = new kakao.maps.Map(container, options);';
        	kakaoMap += '</script>';

        	dom.setProperty("innerHTML",kakaoMap);

        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
