package backend.controller;

import backend.controller.requestbody.EventBody;
import backend.entity.Category;
import backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import backend.entity.Event;
import backend.service.EventService;
import backend.service.UserService;

import java.util.Arrays;

@Controller
public class EventController {
    private EventService eventService;
    private UserService userService;
    private CategoryService categoryService;

    @Autowired
    public EventController(EventService eventService, UserService userService, CategoryService categoryService) {
        this.eventService = eventService;
        this.userService = userService;
        this.categoryService = categoryService;

    }

   /* @GetMapping(value = "/welcome")
    public @ResponseBody User list() {
        User user = new User("User1","User1Password");
        System.out.println("Controller Work");
        return user;
    }*/

   /* @PostMapping(value = "/events") //, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    //@ResponseBody
   // @ResponseStatus(HttpStatus.OK)
    public ResponseEntity addEvent(@RequestBody Event event){ //create EventBody to Event Throw constructor
        event.setUser(userService.findById(event.getUserID()).get());
        eventService.saveEvent(event);
        return new ResponseEntity(HttpStatus.CREATED);
    }*/

    @PostMapping(value = "/events") //, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    //@ResponseBody
   // @ResponseStatus(HttpStatus.OK)
    public ResponseEntity addEvent(@RequestBody EventBody eventBody){ //create EventBody to Event Throw constructor
        eventBody.setUser(userService.findById(eventBody.getUserID()).get());
        Arrays.stream(eventBody.getCategory().split(",")).forEach(id ->
                eventBody.addCategory(categoryService.findById(Long.valueOf(id))));

        Event event = new Event(eventBody);
        eventService.saveEvent(event);
        eventService.findVerifyEvent().forEach(event1 -> System.out.println("Event Verify " + event1));
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
