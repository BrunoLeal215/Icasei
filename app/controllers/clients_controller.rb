class ClientsController < ApplicationController
	def index
		@clients = Client.all
		@client = Client.new
	end
	def new
		@clients = Client.all
		@client = Client.new
	end
	
	def show
		@client = Client.find(params[:id])
	end
	
	def create
		@clients = Client.all
		@client = Client.new(clients_params)
		
		if @client.save
			flash[:notice] = 'Cliente criado com sucesso'
			render :new
		else
			flash[:error] = 'Não salvou'
			render :new
		end
	end
	
	private
	def clients_params
      params.require(:client).permit(:nome, :email)
    end
	
end
