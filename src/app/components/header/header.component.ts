import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  onHoveredItem: string| null = null;
  hideTimeOut: any;
  menuItems = [
    { 
      title: 'Shop',
      categories: [
        {
          name: "Sneha",
          subcategories:['Healing Concentrate', 'Sneha: The Starter Pack', 'Regenerating Face Serum', 'Nourishing Elixir']
        },
        {
          name: "TRIVENI",
          subcategories:['Triveni: The Perfect Trio', 'Hydrating Face Cream','Balancing Toner', 'Brightening Face Cleanser']
        },
        {
          name: "View All",
          subcategories:[]
        },
      ]
    },
    {
      title: 'About',
      categories: [
        {
          name: "story",
          subcategories:[]
        },
        {
          name: "packaging",
          subcategories:[]
        },
        {
          name: "Alignment",
          subcategories:[]
        }
      ]
    },
    {
      title: 'Ayurveda',
      categories: [
        {
          name: "Ayurveda",
          subcategories:[]
        },
        {
          name: "Doshas",
          subcategories:[]
        },
        {
          name: "quiz",
          subcategories:[]
        }
      ]
    }
  ];
  constructor(){}
  ngOnInit(): void {
    
  }

  //follow tmouse hovered event on items
  onMouseEnter(title: string){
    clearTimeout(this.hideTimeOut);
    this.onHoveredItem = title;
  }

  onMouseLeave(){
    this.hideTimeOut = setTimeout(()=>{
      this.onHoveredItem = null;
    }, 200)
  }
}
