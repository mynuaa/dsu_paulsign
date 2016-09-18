	
	var checkmouse = 0;
	var Cmouse = 0;
	var mos = 0;
	var m_width = 0;
	var m_h_width = 0;
	var m_z_width = 0;
	var m_height = 0;
	var m_h_height = 0;
	var m_z_height = 0;
	var the = "";
	var thep=0;
	var lasT=0;
	var t_top=0;
	var t_left=0;
	var i = 0;
	var pos = new Array();
	var colorA = new Array("#EA0000","#F00078","#AE00AE","#0000C6","#00A600","#D94600","#000079","#FF8040","#3A006F","#750075");
	jQuery(document).ready(function(){
		mousemov();	
		Initialize(mos);
		jQuery("#Qdao").css({cursor:"pointer"});
		//window.location.href="plugin.php?id=xinqingqiang:xinqingqiang#Qdao";
	});

	//随机初始化
	function Initialize(){
		jQuery(".mood").each(function(){
			var r_width ;
			var r_height ;
			do{
			r_width = Math.random()*650 ;
			r_height = Math.random()*500;
			pos[i] = new Array(r_width,r_height);
			}while(isclose()==1); 
			var r_color = Math.floor(Math.random()*10);
			r_width = r_width > 65 ? r_width:r_width + 65;
			r_width = r_width < 645 ? r_width: 1260 - r_width;
			r_height = r_height > 75 ? r_height:r_height + 75;
			r_height = r_height < 426? r_height:852 - r_height;
			i++;
			jQuery(this).css({left: r_width + "px" , top: r_height + "px" , color: colorA[r_color] , display: "block"});
			jQuery(".mood_wall").prepend(this);
		})
	};

	function isclose(){
		for(var j=0;j<i;j++)
		{
			var k = (pos[i][0]-pos[j][0])*(pos[i][1]-pos[j][1])
			if(k < 2000 && k > -2000)
				return 1;
		}
		return 0;
	}

	//随鼠标移动
	function mousemov(){
		jQuery(document).mousemove(function(e){
			if(checkmouse==1){
				if(Cmouse == 1){
					thep = jQuery(the).position();
					t_left = thep.left - e.pageX;
					t_top = thep.top - e.pageY;
					lasT = jQuery(the);
					jQuery(".mood_wall").append(lasT);
					Cmouse = 0;
					tmaxTop = jQuery(".moodwall").innerHeight() - jQuery(the).innerHeight() - 65;
					tminTop = jQuery(the).innerHeight()/4 - 20;
				}
				t_Top = e.pageY + t_top;
				t_Left = e.pageX + t_left;
				if ( t_Top > tmaxTop ) t_Top = tmaxTop - 15 ;
				if ( t_Top < tminTop ) t_Top = tminTop + 15;
				if ( t_Left < 22 ) t_Left = 37;
				if ( t_Left > 695 ) t_Left = 680;
				jQuery(the).css({left: t_Left + "px", top: t_Top + "px"});
			}
		});
	};

	//触发
	jQuery("#Qdao,.mood_wall .mood").live("mousedown",function(){
		if(event.type == "mousedown"){
			if(document.all) //IE
				{
					document.onmousemove = function(){return false};
				}
			else //FF
				{
					var e = arguments[0];
					e.preventDefault(); 
				}
			checkmouse = 1;
			the = this;
			jQuery("#Qdao,.mood").css({cursor:"move"}); //光标改变
			jQuery(the).css({
				opacity:0.5,
				"-moz-opacity":0.5,
				"-khtml-opacity":0.5,
				"filter":"alpha(opacity=50)"
			})
			Cmouse = 1;
		}
	})
	jQuery(document).mouseup(function(){
			jQuery(the).css({
				opacity:0.9,
				"-moz-opacity":0.9,
				"-khtml-opacity":0.9,
				"filter":"alpha(opacity=90)"
			})
		jQuery(".mood").css({cursor:"default"});
		jQuery("#Qdao").css({cursor:"pointer"});
		//jQuery("#Qdao").find("td").css({cursor:"pointer"});
		the = "";
		checkmouse = 0;
	})