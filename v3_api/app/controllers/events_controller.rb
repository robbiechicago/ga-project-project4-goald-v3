class EventsController < ApplicationController

  def index
    @events = User.find(params[:user_id]).events

    render json: @events
  end

  def create
    @event = Event.new(user_id: params[:user_id], goal_id: params[:goal_id], event_datetime: params[:event_datetime])

    if @event.save
      puts 'saved'
      # render json: @event, status: :created, location: @event
      
    else
      puts 'not saved'
      # render json: @event.errors, status: :unprocessable_entity
    end

  end
end
