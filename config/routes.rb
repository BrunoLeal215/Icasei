Rails.application.routes.draw do
   root 'home#index'
   get 'sobre', to: 'sobre#index'
   get 'rastrear', to: 'tracking#index'
   post 'rastrear', to: 'tracking#create'
   
   resources :clients
   

end
