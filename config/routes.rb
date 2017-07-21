Rails.application.routes.draw do
  get 'users/new'

  resources :articles
 
  root 'welcome#index'
post 'search' => 'articles#search',:as=>"search"
post 'date' => 'articles#date',:as=>"date"
post 'status' => 'articles#status',:as=>"status"
get 'vinosaran' => 'articles#index1',:as=>"index1"
get 'status' => 'articles#index2',:as=>"index2"

get 'stores/pending'

get 'stores/complete'


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
     resources :stores
     post 'test' => 'stores#test',:as=>"test"
get 'test' => 'stores#index5',:as=>"index5"


post 'status12' => 'stores#status12',:as=>"status12"
get 'status12' => 'stores#index7',:as=>"index7"
get '/stores/:id/print', :controller => 'stores', :action=> 'stores_print',:as=>:stores_print
  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
