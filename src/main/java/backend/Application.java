package backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import backend.service.EventService;

/**
 * main application class
 */
@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@EnableScheduling
// @EnableNeo4jRepositories
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        log.info("Starting context");
        SpringApplication.run(Application.class);
        log.info("Finishing context");
    }


/*    @Bean
    public CommandLineRunner demo(RouteService service) {
        return (args) -> {
            log.info("backend.Application is running");
            Coordinate coord1 = new Coordinate(12.36, 14.15);
            Coordinate coord2 = new Coordinate(12.89, 14.5);
            Coordinate coord3 = new Coordinate(13.4, 14.98);
            List<Coordinate> listCoordinates = Arrays.asList(coord1, coord2, coord3);
            service.saveRoute(listCoordinates, 1L);
            log.info("-------------------------------");
        };
    }*/
    /**
     * command line to test application
     * @param service
     * @return
     */
    @Bean
    public CommandLineRunner demo(EventService service) {
                                  //UserService service) {
        return (args) -> {
            service.removeExpEvents();
            /*log.info("backend.Application is running");
            User user = new User("User1","User1Pass");

          //  Timestamp start = new Timestamp(2018, 8, 24, 0,0,0,0);
            Timestamp start = new Timestamp(System.currentTimeMillis());
            Timestamp end = new Timestamp(118, 7, 25, 0,0,0,0); // year - the year minus 1900, month - 0 to 11
            service.saveEvent("День города", "Event Discription",user,"category1",
                    55.12,33.12, "location1",start,end);
            log.info("-------------------------------");*/
        };
    }
}
