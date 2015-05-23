var mainboard = new Vue({
	el : '#status-pane',
	data : {
		name : null,
		money : 0,

		slaves : 1,
		workLevel : 1
	},
	methods : {
		getSlaveCost : function(){
			return this.slaves * 5;
		},

		getWorkUpgradeCost : function(){
			return this.workLevel * 300;
		},

		buySlave : function(){
			var cost = this.getSlaveCost();

			if (this.money < cost) return;

			this.money -= cost;

			this.slaves++;
		},

		getIncome : function(){
			return this.slaves * 3; //Slaves worth 3 each
		},

		work : function(){
			this.money += this.workLevel * 5; //5 for level
		},

		upgradeWorkLevel : function(){
			var cost = this.getWorkUpgradeCost();

			if (this.money < cost) return;

			this.money -= cost;

			this.workLevel++;
		},

		setName : function(){
			this.name = prompt('Enter your name');
		}
	}
});

setInterval(function(){
	mainboard.money += mainboard.getIncome();
}, 1000);