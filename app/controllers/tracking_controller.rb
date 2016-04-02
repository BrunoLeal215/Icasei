class TrackingController < ApplicationController

	def index
		@trackings = Tracking.all
	end
	
	def create
    data = Tracking.create(tracking_params)
    @tracking = Tracking.create(data)
    render json: { success: true }
  end
  
private

  def tracking_params
    params.require(:tracking).permit(:guid, :url, :data)
  end
end
